"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";

type Option = { value: string; label: string };

type Props = {
  id: string;
  value: string;
  options: Option[];
  placeholder: string;
  className: string;
  describedBy?: string;
  invalid?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export default function LeadDropdown({
  id,
  value,
  options,
  placeholder,
  className,
  describedBy,
  invalid = false,
  disabled = false,
  onChange,
}: Props) {
  const generatedId = useId();
  const menuId = `${generatedId}-options`;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeOptionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
    width: number;
    maxHeight: number;
  } | null>(null);

  const selected = options.find((option) => option.value === value);

  function openMenu() {
    if (disabled) return;
    const trigger = triggerRef.current;
    if (
      trigger &&
      window.innerHeight - trigger.getBoundingClientRect().bottom < 280
    ) {
      trigger.scrollIntoView({ block: "center", behavior: "auto" });
    }
    const selectedIndex = options.findIndex((option) => option.value === value);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  }

  function selectOption(option: Option) {
    onChange(option.value);
    setOpen(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        openMenu();
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Tab") {
      setOpen(false);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(index + 1, options.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const option = options[activeIndex];
      if (option) selectOption(option);
    }
  }

  useEffect(() => {
    if (!open) return;

    const updatePosition = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      setPosition({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
        maxHeight: Math.max(100, Math.min(280, window.innerHeight - rect.bottom - 12)),
      });
    };

    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [open]);

  useEffect(() => {
    activeOptionRef.current?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  const menu = open && position && typeof document !== "undefined"
    ? createPortal(
        <div
          id={menuId}
          ref={menuRef}
          role="listbox"
          aria-labelledby={id}
          className="fixed z-[300] overflow-y-auto rounded-xl border border-line bg-white py-1 shadow-[0_8px_24px_rgba(16,44,92,0.16)]"
          style={position}>
          {options.map((option, index) => {
            const active = index === activeIndex;
            return (
              <div
                id={`${menuId}-${index}`}
                key={option.value}
                ref={active ? activeOptionRef : undefined}
                role="option"
                aria-selected={option.value === value}
                className={`cursor-pointer px-4 py-2.5 text-sm ${
                  active ? "bg-blue text-white" : "text-ink hover:bg-tint"
                }`}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}>
                {option.label}
              </div>
            );
          })}
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <button
        id={id}
        ref={triggerRef}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-activedescendant={open ? `${menuId}-${activeIndex}` : undefined}
        aria-invalid={invalid}
        aria-describedby={describedBy}
        disabled={disabled}
        className={`${className} flex cursor-pointer items-center justify-between gap-3 text-left disabled:cursor-not-allowed`}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleKeyDown}>
        <span className={selected ? "text-ink" : "text-body/70"}>
          {selected?.label ?? placeholder}
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={`h-4 w-4 flex-none transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8">
          <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {menu}
    </>
  );
}

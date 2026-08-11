import { UNIVERSITIES } from "@/lib/data";

type LogoEntry = { match: string; name: string; loc: string; logo: string };

// Only the 9 universities with a real logo file in public/assets/img/.
// Where a matching record exists in UNIVERSITIES (lib/data.ts) its name and
// location are used; Vivekananda Global University, UPES, JAIN, Chandigarh
// University and Sharda University aren't in that dataset, so they're
// defined here rather than adding full (mostly invented) University
// records to lib/data.ts.
const UNIVERSITY_LOGOS: LogoEntry[] = [
  { match: "Amity", name: "Amity University", loc: "Noida, Uttar Pradesh", logo: "/assets/img/amity-logo.webp" },
  { match: "Manipal", name: "Manipal University", loc: "Jaipur, Rajasthan", logo: "/assets/img/manipal-logo.webp" },
  { match: "Lovely Professional", name: "Lovely Professional University", loc: "Phagwara, Punjab", logo: "/assets/img/lpu-logo.webp" },
  { match: "Vivekananda Global", name: "Vivekananda Global University", loc: "Jaipur, Rajasthan", logo: "/assets/img/vgu-logo.webp" },
  { match: "NMIMS", name: "NMIMS", loc: "Mumbai, Maharashtra", logo: "/assets/img/nmims-logo.webp" },
  { match: "UPES", name: "UPES", loc: "Dehradun, Uttarakhand", logo: "/assets/img/upes-logo.webp" },
  { match: "JAIN", name: "JAIN (Deemed-to-be University)", loc: "Bengaluru, Karnataka", logo: "/assets/img/jain-logo.webp" },
  { match: "Chandigarh University", name: "Chandigarh University", loc: "Mohali, Punjab", logo: "/assets/img/chandigarh-logo.webp" },
  { match: "Sharda", name: "Sharda University", loc: "Greater Noida, Uttar Pradesh", logo: "/assets/img/sharda-logo.webp" },
   { match: "Shoolini", name: "Shoolini University", loc: "Mandi, Himachal Pradesh", logo: "/assets/img/shoolini-logo.webp" },
];

const revealCls =
  "opacity-0 translate-y-[18px] transition-[opacity,transform] duration-500 ease-out [&.in]:opacity-100 [&.in]:translate-y-0";

export default function UniStrip() {
  const universities = UNIVERSITY_LOGOS.map((item) => {
    const record = UNIVERSITIES.find((u) => u.n.toLowerCase().includes(item.match.toLowerCase()));

    return {
      logo: item.logo,
      name: record ? record.n.replace(/\s+Online\b/i, "") : item.name,
      loc: record ? record.loc : item.loc,
    };
  });

  return (
    <div
      className={`reveal grid grid-cols-5 gap-5 max-[980px]:grid-cols-3 max-[620px]:grid-cols-2 ${revealCls}`}
      id="uniStrip"
    >
      {universities.map(({ name, loc, logo }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center rounded-brand border border-line bg-white px-4 py-5 text-center shadow-brand"
        >
          {/* University Logo */}
          <div className="mb-3 flex h-[58px] w-full items-center justify-center">
            <img
              src={logo}
              alt={`${name} logo`}
              className="max-h-[52px] max-w-[130px] object-contain"
              loading="lazy"
            />
          </div>

          {/* University Name */}
          <div className="text-[13px] font-semibold leading-[1.4] text-ink">
            {name}
          </div>

          {/* Location */}
          <div className="mt-1 text-[11px] text-body">
            {loc.split(",")[0]}
          </div>
        </div>
      ))}
    </div>
  );
}

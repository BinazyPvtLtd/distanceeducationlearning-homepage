export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  course: string;
  course_id: number;
  state: string;
  page_url: string;
  source: string;
  remarks: string;
};

const LEADS_ENDPOINT = "https://api.distanceeducationlearning.com/api/v1/leads";

export async function submitLead(payload: LeadPayload): Promise<void> {
  let res: Response;
  try {
    res = await fetch(LEADS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Network error. Please check your connection and try again.");
  }

  let body: { success?: boolean; message?: string } | null = null;
  try {
    body = await res.json();
  } catch {
    // Non-JSON response; fall back to status-based handling below.
  }

  if (!res.ok || body?.success === false) {
    throw new Error(body?.message || "Something went wrong. Please try again.");
  }
}

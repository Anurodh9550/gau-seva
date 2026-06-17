import { redirect } from "next/navigation";

/** Sends /objectives visitors to the objectives section on the home page. */
export default function ObjectivesIndexPage() {
  redirect("/#objectives");
}

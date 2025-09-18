import { redirect } from "next/navigation";

export default function Root() {
  redirect("/fr"); // langue par défaut
}
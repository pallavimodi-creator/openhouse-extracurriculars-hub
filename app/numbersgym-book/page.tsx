"use client";

import { useRouter } from "next/navigation";
import { TeacherGate } from "@/components/TeacherGate";
import { NumbersGymBookModal } from "@/components/NumbersGymBookModal";

/**
 * The NumbersGym book as its own page — opens the flippable educator
 * reference book straight away. Closing returns to wherever the educator
 * came from (the library).
 */
export default function NumbersGymBookPage() {
  const router = useRouter();
  return (
    <TeacherGate>
      <NumbersGymBookModal isOpen onClose={() => router.back()} />
    </TeacherGate>
  );
}

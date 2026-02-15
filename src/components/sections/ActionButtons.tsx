import Link from "next/link";
import { Button } from "../ui/button";

export function ActionButtons() {
  return (
    <section id="action-buttons" className="w-full mb-30 md:mb-35">
      <div className="items-center justify-center flex gap-3 md:gap-5">
        <Link href="/locations">
          <Button className="hover:cursor-pointer md:h-11 md:w-40">
            View all locations
          </Button>
        </Link>
        <a href="#contact">
          <Button
            variant="secondary"
            className="hover:cursor-pointer bg-gray-200 md:h-11 md:w-40"
          >
            Contact Us
          </Button>
        </a>
      </div>
    </section>
  );
}

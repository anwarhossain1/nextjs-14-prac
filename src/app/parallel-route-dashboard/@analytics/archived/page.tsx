import Card from "@/components/ui/Card";
import Link from "next/link";

const page = () => {
  return (
    <Card>
      <div className="flex flex-row gap-4">
        Archived
        <Link href="/parallel-route-dashboard">default</Link>
      </div>
    </Card>
  );
};

export default page;

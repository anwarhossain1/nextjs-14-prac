import Card from "@/components/ui/Card";
import Link from "next/link";

const page = () => {
  return (
    <Card>
      <div className="flex flex-row gap-4">
        Analytics
        <Link href="/parallel-route-dashboard/archived">archived</Link>
      </div>
    </Card>
  );
};

export default page;

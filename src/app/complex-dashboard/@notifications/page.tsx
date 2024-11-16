import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
};

export default Notifications;

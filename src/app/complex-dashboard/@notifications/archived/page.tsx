import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const ArchiveNotifications = () => {
  return (
    <Card>
      <div>Notification</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
};

export default ArchiveNotifications;

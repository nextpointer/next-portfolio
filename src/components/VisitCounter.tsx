"use client";

import { useEffect, useState } from "react";

export function VisitCounter() {
  // to store the counts temply
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    const hasIncremented = sessionStorage.getItem("hasIncrementedVisit");

    if (!hasIncremented) {
      fetch("/api/visits", { method: "POST" })
        .then((res) => res.json())
        .then((data) => setVisits(data.visits))
        .catch(console.error);

      sessionStorage.setItem("hasIncrementedVisit", "true");
    } else {
      fetch("/api/visits", { method: "GET" })
        .then((res) => res.json())
        .then((data) => setVisits(data.visits))
        .catch(console.error);
    }
  }, []);
  return (
    <>
      {/*visit counter*/}
      <p className="text-md">
        {visits !== null ? (
          <>
            <span className="text-heading-text-color ">{visits}</span>{" "}
            <span className="text-xs">visits so far</span>
          </>
        ) : (
          <>
            999 <span className="text-xs">visits so far</span>
          </>
        )}
      </p>
    </>
  );
}

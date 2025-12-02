"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Allows pathNames to be optionally provided. If omitted, returns -1 as pathNum.
export function useGetPathNum(pathNames?: string[]) {
  const pathname = usePathname();
  const searchParams = useSearchParams(); // optional, in case you need query params
  const [pathNum, setPathNum] = useState(-1);

  useEffect(() => {
    if (Array.isArray(pathNames) && pathNames.length > 0) {
      const index = pathNames.findIndex((path) => path === pathname);
      setPathNum(index !== -1 ? index : -1);
    } else {
      setPathNum(-1);
    }
  }, [pathname, pathNames]);

  return { location: pathname, pathNum, searchParams };
}

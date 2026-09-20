import { useEffect, useState } from "react";

export default function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setHydrated(true), []);

  return hydrated;
}

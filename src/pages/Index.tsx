import { useState, useEffect } from "react";
import TerminalLoader from "@/components/TerminalLoader";
import Terminal from "@/components/Terminal";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading complete after ~7 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <TerminalLoader /> : <Terminal />;
};

export default Index;

import { useEffect } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <button onClick={() => supabase.auth.signOut()}>signOut</button>
    </div>
  );
}

import supabase from "@/utils/supabase";

export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("❌ Logout error", error);
    else window.location.href = "/";
};
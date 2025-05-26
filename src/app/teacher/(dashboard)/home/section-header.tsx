import { signOut } from "@/lib/SignOutUser";
import { LogOut } from "lucide-react";

export default function SectionHeader() {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">📚 Тавтай морил, Багш аа!</h1>
                <p className="text-gray-500 mt-1">Таны өнөөдрийн үйл ажиллагаа энд байна.</p>
            </div>
            <button
                onClick={signOut}
                className="w-full flex items-center gap-3 text-sm px-4 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition font-medium"
            >
                <LogOut className="w-5 h-5" />
                <span>Системээс гарах</span>
            </button>
        </div>
    )
}
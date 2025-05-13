import { create } from "zustand";

type TeacherFormState = {
    firstname: string;
    lastname: string;
    email: string;
    phoneNumber: string;
    grade: string;
    group: string;
    subjects: string[];

    setField: (field: string, value: string) => void;
    setSubjects: (subjects: string[]) => void;
    reset: () => void;
};

export const useTeacherFormStore = create<TeacherFormState>((set) => ({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    grade: "",
    group: "",
    subjects: [],

    setField: (field, value) =>
        set((state) => ({ ...state, [field]: value })),

    setSubjects: (subjects) => set({ subjects }),

    reset: () =>
        set({
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            grade: "",
            group: "",
            subjects: [],
        }),
}));
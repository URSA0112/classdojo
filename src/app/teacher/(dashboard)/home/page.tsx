import SectionHeader from "./section-header";
import SectionInfo from "./section-info";
import SectionTool from "./section-tool";
import Timer from "./(TeacherTools)/Timer/page";

export default function TeacherHome() {
    return (
        <div>
            <SectionHeader></SectionHeader>
            <SectionInfo></SectionInfo>
            <SectionTool></SectionTool>
        </div>
    )
}
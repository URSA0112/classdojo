import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalender";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";


export default function SchoolPage() {
  return (
    <div className="pt-30 pb-10 px-10 flex flex-col gap-10 bg-gray-200">
      <div className="p-4 flex gap-10 flex-col md:flex-row">
        <div className="w-full lg:w-2/3 flex flex-col gap-10">
          <div className="flex gap-5 justify-between flex-wrap">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>

          <div className="flex gap-10 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountChart />
            </div>

            <div className="w-full lg:w-2/3 h-[450px]">
              <AttendanceChart />
            </div>
          </div>

          <div className="w-full h-[500px]">
            <FinanceChart />
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col gap-10">
          <EventCalendar />
          <Announcements />
        </div>
      </div>
    </div>
  );
}

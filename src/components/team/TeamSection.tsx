import SectionDivider from "../../atoms/SectionDivider";
import { MemberData } from "../../data";
import Member from "./Member";

const TeamSection = () => {
  return (
    <section
      className="p-4 relative min-h-[60vh] w-full max-w-[1224px] text-text-primary mb-[100px]"
      id="team"
    >
      <div className="w-full flex flex-col items-center">
        <SectionDivider className="" />
        <h2 className="text-3xl lg:text-4xl text-left my-4">
          Meet Our
          <span className="font-black"> Creative Team Members</span>
        </h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        <Member
          detail={MemberData[0]}
          key={MemberData[0].id}
          delay={0}
        ></Member>
        <Member
          detail={MemberData[1]}
          key={MemberData[1].id}
          delay={0.3}
        ></Member>
        <Member
          detail={MemberData[2]}
          key={MemberData[2].id}
          delay={0.6}
        ></Member>
      </ul>
    </section>
  );
};

export default TeamSection;

import { contactInfoData } from "@/constants/contactInfo";

function ConactInfo() {
  return (
    <div className="bg-primary flex-1 px-10 py-10 rounded-l-md md:max-w-104">
      <h2 className="text-white font-teachers font-bold text-[40px] mb-6 leading-[1.2]">
        Share love, donate hope.
      </h2>
      <p className="text-white font-inter mb-10 font-light">
        Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend. Est eros facilisi aenean
        nisl..
      </p>

      <p className="text-white font-inter mb-5 font-medium max-w-sm">
        8911 Tanglewood Ave. Capitol Heights, MD 20743
      </p>

      {contactInfoData.map(({ text, icon: Icon }) => (
        <div className="flex items-center mb-5" key={text}>
          <Icon color="#C9A24D" size={19} />
          <span className="text-white font-inter text-[20px] ml-3">{text}</span>
        </div>
      ))}
    </div>
  );
}

export default ConactInfo;

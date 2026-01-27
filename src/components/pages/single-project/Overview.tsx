import { ProjectCardData } from "@/types/hometypes";
import { useTranslations } from "next-intl";

function Overview({ project }: { project: ProjectCardData }) {
  const t = useTranslations("ProjectDetails.Overview");

  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const youtubeUrl = project.video_url ? getYouTubeEmbedUrl(project.video_url) : null;

  return (
    <section className="container mb-10">
      <h3 className="font-bold font-teachers text-5xl mb-15 max-w-3xl">
        {project.video_title || t("video_title")}
      </h3>

      <div className="relative w-full h-[clamp(20rem,50vw,45rem)] bg-black rounded-4xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
        {project.video_url ? (
          youtubeUrl ? (
            <iframe
              src={youtubeUrl}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={project.video_title || project.name}
            />
          ) : (
            <video
              src={
                project.video_url.startsWith("http")
                  ? project.video_url
                  : `${process.env.NEXT_PUBLIC_BACKEND_URL}${project.video_url}`
              }
              controls
              className="w-full h-full object-cover"
            />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/50 bg-gray-900 font-inter">
            No video available
          </div>
        )}
      </div>
    </section>
  );
}

export default Overview;

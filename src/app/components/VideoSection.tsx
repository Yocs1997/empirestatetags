export default function VideoSection() {
  return (
    <section className="py-20 bg-white" id="videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Watch How We Help Drivers
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn how our registration process works and why customers across
            the U.S. trust Empire State Tags.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Video 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <video
  className="w-full h-full object-cover"
  controls
  preload="metadata"
>
  <source src="/videos/video1.mp4" type="video/mp4" />
</video>
            </div>
          </div>

          {/* Video 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <video
  className="w-full h-full object-cover"
  controls
  preload="metadata"
>
  <source src="/videos/video2.mp4" type="video/mp4" />
</video>


            </div>
          </div>


{/* Video 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <video
  className="w-full h-full object-cover"
  controls
  preload="metadata"
>
  <source src="/videos/video3.mp4" type="video/mp4" />
</video>


            </div>
          </div>


          {/* Video 2 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <video
  className="w-full h-full object-cover"
  controls
  preload="metadata"
>
  <source src="/videos/video4.mp4" type="video/mp4" />
</video>


            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
import * as React from "react"

const SiteHeader = () => {
  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/favicon.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <p>
        <i>
          The most rewarding life is one surrendered in love for something worthy of the sacrifice.
        </i>
      </p>
    </div>
  )
}

export default SiteHeader

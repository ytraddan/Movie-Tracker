import { IMAGE_SIZES } from "@/lib/constants";
import { getImageUrl } from "@/lib/utils";
import { CastMember } from "@/lib/tmdb-types";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";
import scrollStyles from "@/styles/scrollSection.module.css";
import styles from "./castList.module.css";

interface CastListProps {
  cast: CastMember[];
  limit: number;
}

export default function CastList({ cast, limit }: CastListProps) {
  const visibleCast = cast.slice(0, limit);

  if (visibleCast.length === 0) {
    return null;
  }

  return (
    <section className={scrollStyles.scrollSection}>
      <h2>Cast</h2>
      <ul>
        {visibleCast.map((member) => (
          <li className={styles.castMember} key={member.id}>
            <ImageWithFallback
              src={getImageUrl(
                member.profile_path,
                IMAGE_SIZES.profile.original,
              )}
              fallback="/actor-fallback.png"
              className={styles.castMemberImage}
              height={170}
              width={170}
              alt={member.name}
            />
            <span>{member.name}</span>
            <span className={styles.castMemberCharacter}>
              {member.character}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

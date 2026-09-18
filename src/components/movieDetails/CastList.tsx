import { IMAGE_SIZES } from "@/lib/constants";
import styles from "./castList.module.css";
import { getImageUrl } from "@/lib/utils";
import { CastMember } from "@/lib/tmdb-types";
import ImageWithFallback from "../imageWithFallback/ImageWithFallback";

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
    <section className={styles.cast}>
      <h2 className={styles.castTitle}>Cast</h2>
      <ul className={styles.castList}>
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
            <span className={styles.castMemberName}>{member.name}</span>
            <span className={styles.castMemberCharacter}>
              {member.character}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

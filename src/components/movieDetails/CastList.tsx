import { IMAGE_SIZES } from "@/lib/constants";
import Image from "next/image";
import styles from "./castList.module.css";
import { getImageUrl } from "@/lib/utils";
import { CastMember } from "@/lib/tmdb-types";

interface CastListProps {
  cast: CastMember[];
}

const CAST_LIMIT = 7;

export default function CastList({ cast }: CastListProps) {
  const visibleCast = cast.slice(0, CAST_LIMIT);

  if (visibleCast.length === 0) {
    return null;
  }

  return (
    <section className={styles.cast}>
      <h2 className={styles.castTitle}>Cast</h2>
      <ul className={styles.castList}>
        {visibleCast.map((member) => (
          <li className={styles.castMember} key={member.id}>
            <Image
              src={getImageUrl(
                member.profile_path,
                IMAGE_SIZES.profile.original,
              )}
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

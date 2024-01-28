interface Link {
  href: string;
  imgSrc?: string;
  imgAlt?: string;
  text: string;
}

interface LinkSentence {
  text: string;
  link: Link;
  endText: string;
}

export type SentenceItem = string | LinkSentence;

interface Detail {
  title: string;
  sentences: SentenceItem[];
}

interface ReviewDetail {
  heading: string;
  sentences: SentenceItem[];
}

interface Review {
  title: string;
  details: ReviewDetail[];
}

interface Blog {
  title: string;
  links: Link[];
}

/** Project
 * @param {string} title : 프로젝트 제목
 * @param {string} period : 진행 기간
 * @param {string} role : 역할
 * @param {Link[]} links : 제목 하단 링크
 * @param {Detail[]} details : 프로젝트 상세 내역
 * @param {Review[]} reviews : 프로젝트 리뷰
 * @param {Blog} blog : 프로젝트 관련 게시글
 */

export interface Project {
  title: string;
  period: string;
  role: string;
  titleLinks: Link[];
  details: Detail[];
  reviews: Review[];
  blog: Blog;
}

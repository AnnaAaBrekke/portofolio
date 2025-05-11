/**
 * A mapping of icon string keys to their corresponding React icon components.
 * Used to dynamically render icons based on string identifiers.
 *
 * @type {Record<string, JSX.Element>}
 */

import { FiMail, FiGlobe } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const IconMap = {
  FiMail: <FiMail />,
  FiGlobe: <FiGlobe />,
  FaLinkedin: <FaLinkedin />,
  FaInstagram: <FaInstagram />,
  FaGithub: <FaGithub />,
};

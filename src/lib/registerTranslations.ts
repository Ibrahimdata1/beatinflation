import { registerTranslations } from "./i18n";
import { zh, es, ja, ko } from "./translations-group1";
import { ar, hi, pt, ru, fr, de } from "./translations-group2";

let registered = false;

export function initTranslations() {
  if (registered) return;
  registerTranslations("zh", zh);
  registerTranslations("es", es);
  registerTranslations("ja", ja);
  registerTranslations("ko", ko);
  registerTranslations("ar", ar);
  registerTranslations("hi", hi);
  registerTranslations("pt", pt);
  registerTranslations("ru", ru);
  registerTranslations("fr", fr);
  registerTranslations("de", de);
  registered = true;
}

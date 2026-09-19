import type { Screenshot } from "../types"

import almaArticle from "./alma/article.webp"
import almaBlog from "./alma/blog.webp"
import almaConsumer from "./alma/consumer.webp"
import almaHome from "./alma/home.webp"
import almaProduct from "./alma/product.webp"
import goalgetrPlayerCalendar from "./goalgetr/player-calendar.webp"
import goalgetrPlayerCard from "./goalgetr/player-card.webp"
import goalgetrSessionPlanner from "./goalgetr/session-planner.webp"
import goalgetrTeam from "./goalgetr/team-drill-calendar.webp"
import goalgetrTrainingVideo from "./goalgetr/training-video.webp"
import intigritiArticle from "./intigriti/article.webp"
import intigritiBlog from "./intigriti/blog.webp"
import intigritiCrowdrecon from "./intigriti/crowdrecon.webp"
import intigritiHome from "./intigriti/home.webp"
import intigritiPricing from "./intigriti/pricing.webp"
import intigritiPrograms from "./intigriti/programs.webp"
import nucaseAddTasks from "./nucase/add-tasks.webp"
import nucaseAi from "./nucase/ai.webp"
import nucaseChooseProject from "./nucase/choose-project.webp"
import nucaseScreens from "./nucase/screens.webp"
import nucaseYourJobs from "./nucase/your-jobs.webp"
import payfitArticle from "./payfit/article.webp"
import payfitBlog from "./payfit/blog.webp"
import payfitHome from "./payfit/home.webp"
import payfitAi from "./payfit/payfit-ai.webp"
import payfitPayroll from "./payfit/payroll.webp"
import payfitSupport from "./payfit/support.webp"
import smartvattenArticle from "./smartvatten/article.webp"
import smartvattenEfficiency from "./smartvatten/efficiency.webp"
import smartvattenHome from "./smartvatten/home.webp"
import smartvattenHub from "./smartvatten/hub.webp"
import smartvattenReferences from "./smartvatten/references.webp"

/*
 * Screenshots are static imports so Next.js knows their dimensions, generates
 * a blur placeholder at build time and serves resized AVIF/WebP through the
 * image optimizer. Sources are 2560px wide WebP, enough for a 2x lightbox.
 */

export const payfit: readonly Screenshot[] = [
  {
    image: payfitHome,
    caption: "Home page",
    alt: "payfit.com home page: Payroll and HR, expert support when you need it",
  },
  { image: payfitAi, caption: "Payfit AI" },
  { image: payfitPayroll, caption: "Payroll product page" },
  { image: payfitSupport, caption: "Support page" },
  { image: payfitBlog, caption: "Blog" },
  { image: payfitArticle, caption: "Blog article" },
]

export const intigriti: readonly Screenshot[] = [
  {
    image: intigritiHome,
    caption: "Home page",
    alt: "intigriti.com home page: global crowdsourced security provider",
  },
  { image: intigritiCrowdrecon, caption: "CrowdRecon" },
  { image: intigritiPrograms, caption: "Bug bounty programs" },
  { image: intigritiPricing, caption: "Pricing" },
  { image: intigritiBlog, caption: "Researchers blog" },
  { image: intigritiArticle, caption: "Blog article" },
]

export const smartvatten: readonly Screenshot[] = [
  {
    image: smartvattenHome,
    caption: "Home page",
    alt: "smartvatten.com home page: Stop guessing. Start controlling.",
  },
  { image: smartvattenHub, caption: "Smartvatten HUB" },
  { image: smartvattenEfficiency, caption: "Water efficiency" },
  { image: smartvattenReferences, caption: "Case studies" },
  { image: smartvattenArticle, caption: "Blog article" },
]

export const goalgetr: readonly Screenshot[] = [
  {
    image: goalgetrTeam,
    caption: "Team, drill and calendar",
    alt: "goalGetr app: team roster, drill video and coach calendar on three phones",
  },
  { image: goalgetrSessionPlanner, caption: "Session planner" },
  { image: goalgetrTrainingVideo, caption: "Training video" },
  { image: goalgetrPlayerCalendar, caption: "Player calendar" },
  { image: goalgetrPlayerCard, caption: "Player card" },
]

export const alma: readonly Screenshot[] = [
  {
    image: almaHome,
    caption: "Home page",
    alt: "almapay.com home page: le paiement en plusieurs fois flexible et garanti",
  },
  { image: almaProduct, caption: "Product page" },
  { image: almaConsumer, caption: "Consumer page" },
  { image: almaBlog, caption: "Blog" },
  { image: almaArticle, caption: "Blog article" },
]

export const nucase: readonly Screenshot[] = [
  {
    image: nucaseScreens,
    caption: "App screens",
    alt: "Nucase app: partner sign-up, task estimate and room picker on three phones",
  },
  { image: nucaseChooseProject, caption: "Choose a project" },
  { image: nucaseAddTasks, caption: "Add tasks" },
  { image: nucaseYourJobs, caption: "Your jobs" },
  { image: nucaseAi, caption: "AI assistant" },
]

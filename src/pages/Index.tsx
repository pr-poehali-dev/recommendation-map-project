import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const REFERRAL_LINK = "https://tbank.ru/baf/87PBk0SQxDp";
const CARD_IMAGE = "https://cdn.poehali.dev/projects/3d41569c-c2d7-4d18-9279-483f4a25b860/files/6a862b42-d123-4bb2-80bb-97c9dfb60987.jpg";

const advantages = [
  {
    icon: "Percent",
    title: "Реальные деньги",
    desc: "Кэшбэк зачисляется рублями на счёт — тратьте как хотите, без ограничений и срока действия.",
    value: "до 30%",
  },
  {
    icon: "ShoppingBag",
    title: "Категории кэшбэка",
    desc: "Выбирайте 3 категории повышенного кэшбэка каждый месяц сами — рестораны, АЗС, путешествия и другие.",
    value: "3 кат.",
  },
  {
    icon: "Zap",
    title: "Мгновенный возврат",
    desc: "Деньги возвращаются в тот же день — никаких ожиданий конца месяца или накоплений баллов.",
    value: "0 дней",
  },
  {
    icon: "Globe",
    title: "Везде без комиссий",
    desc: "Бесплатные переводы, снятие наличных по всему миру и оплата в любых магазинах без скрытых сборов.",
    value: "0 ₽",
  },
  {
    icon: "Shield",
    title: "Безопасность 24/7",
    desc: "Моментальная блокировка, уведомления о каждой операции и защита покупок в один клик.",
    value: "24/7",
  },
  {
    icon: "Gift",
    title: "Бонус за оформление",
    desc: "Оформите по реферальной ссылке и получите 500 ₽ на счёт сразу после активации карты.",
    value: "500 ₽",
  },
];

const plans = [
  {
    name: "Black",
    price: "0 ₽",
    period: "первый год",
    badge: null,
    gradient: "from-zinc-800/80 to-zinc-900/80",
    borderColor: "border-zinc-700",
    features: [
      { label: "Кэшбэк рублями", value: "до 1%" },
      { label: "Категории кэшбэка", value: "3 категории" },
      { label: "Обслуживание", value: "0 ₽/год" },
      { label: "Снятие наличных", value: "до 100 000 ₽/мес" },
      { label: "Переводы", value: "бесплатно" },
      { label: "% на остаток", value: "до 17% годовых" },
    ],
  },
  {
    name: "Black Premium",
    price: "1 990 ₽",
    period: "в месяц",
    badge: "Популярный",
    gradient: "from-yellow-500/15 to-amber-700/15",
    borderColor: "border-yellow-500/40",
    features: [
      { label: "Кэшбэк рублями", value: "до 15%" },
      { label: "Категории кэшбэка", value: "5 категорий" },
      { label: "Обслуживание", value: "бесплатно при условиях" },
      { label: "Снятие наличных", value: "до 500 000 ₽/мес" },
      { label: "Переводы", value: "безлимит" },
      { label: "% на остаток", value: "до 20% годовых" },
    ],
  },
];

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString("ru-RU")}{suffix}</span>;
}

export default function Index() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-golos overflow-x-hidden">

      {/* Animated background blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-yellow-500/8 blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-400/6 blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-yellow-300/4 blur-[80px] animate-pulse" style={{ animationDelay: "3s" }} />
      </div>

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            <Icon name="CreditCard" size={17} className="text-black" />
          </div>
          <span className="font-black text-xl tracking-wide">BLACK</span>
        </div>
        <a
          href={REFERRAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]"
        >
          <Icon name="Gift" size={15} />
          Получить 500 ₽
        </a>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-10 pb-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full mb-7 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Дебетовая карта Т‑Банк
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-7 tracking-tight">
            Зарабатывай
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              деньги,
            </span>
            <br />
            не бонусы
          </h1>

          <p className="text-zinc-400 text-lg mb-9 leading-relaxed max-w-sm">
            Карта Black возвращает реальные рубли с каждой покупки — без баллов, без ограничений, без сгораний.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(234,179,8,0.5)]"
            >
              <Icon name="CreditCard" size={18} />
              Оформить карту
            </a>
            <a
              href="#advantages"
              className="flex items-center gap-2 border border-zinc-800 hover:border-yellow-400/40 text-zinc-400 hover:text-yellow-400 font-medium text-base px-8 py-4 rounded-2xl transition-all duration-300"
            >
              Подробнее
              <Icon name="ArrowDown" size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { value: 500, suffix: " ₽", label: "бонус новым" },
              { value: 30, suffix: "%", label: "макс. кэшбэк" },
              { value: 0, suffix: " ₽", label: "комиссий" },
            ].map((stat, i) => (
              <>
                {i > 0 && <div key={`sep-${i}`} className="w-px bg-zinc-800" />}
                <div key={i}>
                  <div className="text-2xl font-black text-yellow-400">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-zinc-500 text-sm mt-0.5">{stat.label}</div>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Card visual */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-amber-500/5 to-transparent blur-2xl rounded-full scale-110" />
          <img
            src={CARD_IMAGE}
            alt="Карта Black"
            className="relative z-10 w-full max-w-md rounded-3xl shadow-[0_20px_80px_rgba(234,179,8,0.15)] hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          <div className="absolute top-6 -right-4 z-20 bg-yellow-400 text-black text-xs font-black px-3 py-2 rounded-xl shadow-xl rotate-6 leading-tight">
            +500 ₽<br />сейчас
          </div>
          <div className="absolute -bottom-4 -left-4 z-20 bg-zinc-900 border border-zinc-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2">
            <span className="text-yellow-400 font-black">30%</span>
            <span className="text-zinc-400">кэшбэк деньгами</span>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Почему Black
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-tight">
            Преимущества карты
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Всё что нужно для умных финансов — в одной карте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group relative bg-zinc-900/50 border border-zinc-800/80 hover:border-yellow-400/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/3 group-hover:to-transparent transition-all duration-300" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 group-hover:bg-yellow-400/20 flex items-center justify-center transition-colors duration-300 shadow-inner">
                    <Icon name={adv.icon} fallback="Star" size={22} className="text-yellow-400" />
                  </div>
                  <span className="text-yellow-400 font-black text-xl tabular-nums">{adv.value}</span>
                </div>
                <h3 className="font-bold text-base mb-2">{adv.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            Тарифы
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-tight">
            Выберите свой план
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Оба тарифа возвращают деньгами — разница только в возможностях
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredPlan(i)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-3xl border p-8 transition-all duration-300 ${plan.borderColor} bg-gradient-to-br ${plan.gradient} ${hoveredPlan === i ? "scale-[1.025] shadow-[0_20px_60px_rgba(0,0,0,0.5)]" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-black px-5 py-1.5 rounded-full tracking-wide shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                  {plan.badge}
                </div>
              )}

              <div className="mb-7">
                <h3 className="text-xl font-black mb-2 tracking-tight">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-yellow-400">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-center justify-between text-sm border-b border-zinc-800/50 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-500">{f.label}</span>
                    <span className="font-semibold text-white">{f.value}</span>
                  </li>
                ))}
              </ul>

              <a
                href={REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center font-bold py-4 rounded-xl transition-all duration-300 text-sm ${
                  plan.badge
                    ? "bg-yellow-400 hover:bg-yellow-300 text-black hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]"
                    : "bg-zinc-800 hover:bg-zinc-700 text-white"
                }`}
              >
                Оформить {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Referral callout */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-yellow-400/8 border border-yellow-400/20 rounded-2xl px-6 py-4">
            <Icon name="Gift" size={18} className="text-yellow-400 flex-shrink-0" />
            <span className="text-sm text-zinc-400">
              Оформите по{" "}
              <a
                href={REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-bold hover:underline"
              >
                реферальной ссылке
              </a>{" "}
              и получите <span className="text-yellow-400 font-bold">+500 ₽</span> сразу после активации
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-900 py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center">
            <Icon name="CreditCard" size={13} className="text-black" />
          </div>
          <span className="font-black tracking-wide">BLACK</span>
        </div>
        <p className="text-zinc-700 text-sm max-w-md mx-auto leading-relaxed">
          Реферальная программа Т‑Банк. Карта Black — дебетовая карта с кэшбэком рублями. Условия уточняйте на официальном сайте банка.
        </p>
      </footer>
    </div>
  );
}
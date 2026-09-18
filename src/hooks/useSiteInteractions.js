import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useSiteInteractions() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -5% 0px" });

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const ellipseObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          ellipseObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });

    document.querySelectorAll(".ellipse-draw-group").forEach((el) => ellipseObserver.observe(el));

    const filterButtons = [...document.querySelectorAll("[data-filter]")];
    const filterHandlers = filterButtons.map((button) => {
      const handler = () => {
        filterButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        const filter = button.dataset.filter;
        document.querySelectorAll(".masonry-item").forEach((item) => {
          item.style.display = filter === "all" || item.dataset.category === filter ? "block" : "none";
        });
      };
      button.addEventListener("click", handler);
      return [button, handler];
    });

    const details = [...document.querySelectorAll(".faq-list details")];
    const detailHandlers = details.map((detail) => {
      const handler = () => {
        if (!detail.open) return;
        const list = detail.closest(".faq-list");
        list?.querySelectorAll("details[open]").forEach((other) => {
          if (other !== detail) other.removeAttribute("open");
        });
      };
      detail.addEventListener("toggle", handler);
      return [detail, handler];
    });

    return () => {
      revealObserver.disconnect();
      ellipseObserver.disconnect();
      filterHandlers.forEach(([el, handler]) => el.removeEventListener("click", handler));
      detailHandlers.forEach(([el, handler]) => el.removeEventListener("toggle", handler));
    };
  }, [location.pathname]);
}

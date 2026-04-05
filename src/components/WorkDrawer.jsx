import { useCursor } from "../context/CursorContext";

const PROJECTS = [
  { title: "Panda\n× Bamboo", cat: "AR Experience", slug: "#" },
  { title: "Panda Delivery\nSummer of Naps", cat: "Campaign", slug: "#" },
  { title: "Snooze App", cat: "Brand Identity, App", slug: "#", soon: true },
  { title: "Panda\nDreamzone", cat: "VR Experience", slug: "#" },
];

export default function WorkDrawer({ open, onClose }) {
  const { setCursorType } = useCursor();

  return (
    <div className={`drawer drawer--work${open ? " drawer--open" : ""}`}>
      <button
        className="drawer__close"
        onClick={onClose}
        onMouseEnter={() => setCursorType("view")}
        onMouseLeave={() => setCursorType("default")}
      >
        Close ✕
      </button>

      <div className="drawer__body container">
        <p className="drawer__label">Work</p>
        <ul className="work-drawer-list">
          {PROJECTS.map((p, i) => (
            <li key={i} className="work-drawer-item">
              <a
                href={p.slug}
                className="work-drawer-link"
                onMouseEnter={() => setCursorType(p.soon ? "soon" : "view")}
                onMouseLeave={() => setCursorType("default")}
              >
                <span className="work-drawer-title">
                  {p.title.split("\n").map((line, j) => (
                    <span key={j} className="work-drawer-title-line">{line}</span>
                  ))}
                </span>
                <span className="work-drawer-cat">{p.cat}{p.soon && <em className="work-drawer-soon">Coming soon</em>}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

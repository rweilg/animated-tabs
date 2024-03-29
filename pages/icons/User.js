export default function User({ isOpen }) {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Artboard-4"
          transform="translate(-532.000000, -159.000000)"
          stroke={isOpen ? "#fff" : "#333333"}
          stroke-width="2"
        >
          <g id="32" transform="translate(532.000000, 159.000000)">
            <path
              d="M2,21 C2,21 1.5,16 7,16 C12.5,16 11.512498,16 17.006249,16 C22.5,16 22.0062485,21 22.0062485,21"
              id="Path-41"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <circle id="Oval-40" cx="12" cy="8" r="5"></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function Folder({ isOpen }) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Artboard-4" transform="translate(-708.000000, -113.000000)">
          <g id="16" transform="translate(708.000000, 115.000000)">
            <path
              d="M11.5857864,17 L14.2928932,19.7071068 L14.5857864,20 L15,20 L20.009222,20 C21.1044506,20 22,19.102094 22,18.0014977 L22,6.99850233 C22,5.89626364 21.1085926,5 20.0066023,5 L3.99339768,5 C2.89217541,5 2,5.89385529 2,6.99539757 L2,15.0046024 C2,16.099013 2.89670181,17 3.99754465,17 L11.5857864,17 Z"
              id="Rectangle-406"
              stroke={isOpen ? "#ffffff" : "#333333"}
              stroke-width="2"
              stroke-linejoin="round"
              transform="translate(12.000000, 12.500000) scale(1, -1) translate(-12.000000, -12.500000) "
            ></path>
            <path
              d="M3,5 C3,4.44771525 3.4454627,4 3.99871095,4 L12.5,4 L10.5,6 L3.99594209,6 C3.44589846,6 3,5.55613518 3,5 L3,5 Z"
              id="Rectangle-409"
              fill={isOpen ? "#ffffff" : "#333333"}
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

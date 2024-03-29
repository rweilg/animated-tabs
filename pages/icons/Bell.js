export default function Bell({ isOpen }) {
  return (
    <>
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
          <g id="Artboard-4" transform="translate(-884.000000, -291.000000)">
            <g id="100" transform="translate(884.000000, 291.000000)">
              <path
                d="M9,21 C9,22.6568542 10.3431458,24 12,24 C13.6568542,24 15,22.6568542 15,21 L9,21 Z"
                id="Combined-Shape"
                fill={isOpen ? "#fff" : "#333333"}
              ></path>
              <path
                d="M4.29289321,15.2928932 C2.8901941,16.6955923 3.27426205,19 4.99999999,19 C5.57812499,19 5.57812499,19 7.32812499,19 C9.46875,19 9.46875,19 12,19 C14.53125,19 14.53125,19 16.671875,19 C18.421875,19 18.421875,19 19,19 C20.725738,19 21.1098059,16.6955923 19.7071068,15.2928932 C19.1866334,14.7724198 18.8010848,14.1754789 18.5288785,13.5051137 C18.1040732,12.4589418 17.9999347,11.5350211 17.9999994,10.0212457 C17.9999998,10.0105998 17.9999998,10.0105998 18,10 C18,5.72810928 15.9137988,3 12,3 C8.08620121,3 6,5.72810928 6,10 C6,13.5001465 5.96179386,13.6239926 4.29289321,15.2928932 L4.29289321,15.2928932 Z"
                id="Oval-24"
                stroke={isOpen ? "#fff" : "#333333"}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

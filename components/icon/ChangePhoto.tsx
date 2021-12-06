interface IProps {
  color: string;
}

const ChangePhoto = ({ color }: IProps) => (
  <div className="cursor-pointer">
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="22" r="21.5" fill="white" stroke={color} />
      <path
        d="M30 14H26.83L25 12H19L17.17 14H14C12.9 14 12 14.9 12 16V28C12 29.1 12.9 30 14 30H30C31.1 30 32 29.1 32 28V16C32 14.9 31.1 14 30 14ZM22 17C23.63 17 25.06 17.79 25.98 19H22C20.34 19 19 20.34 19 22C19 22.35 19.07 22.69 19.18 23H17.1C17.04 22.68 17 22.34 17 22C17 19.24 19.24 17 22 17ZM22 27C20.37 27 18.94 26.21 18.02 25H22C23.66 25 25 23.66 25 22C25 21.65 24.93 21.31 24.82 21H26.9C26.97 21.32 27 21.66 27 22C27 24.76 24.76 27 22 27Z"
        fill={color}
      />
    </svg>
  </div>
);
export default ChangePhoto;

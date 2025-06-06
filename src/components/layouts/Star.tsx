const Star = ({ filled }: { filled: boolean }) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0L12 6L18 6.75L13.88 11.37L15 18L9 15L3 18L4.13 11.37L0 6.75L6 6L9 0Z"
          fill={filled ? '#FFC700' : '#BFBFBF'}
        />
      </svg>
    );
  };
  
  export default Star;
  
import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";


type SvgComponent = (props: SvgProps) => JSX.Element;

export const BottomWaveOpacity: SvgComponent = props => {
  return (
    <Svg
      data-name="Layer 1"
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      {...props}
      style={[{
        position: "absolute",
        zIndex: -1,
        transform: [{
          rotate: "180deg",
        }],
      }, props.style]}
    >
      <Path
        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
        opacity={0.25}
        fill="#F15946"
      />
      <Path
        d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
        opacity={0.5}
        fill="#F15946"
      />
      <Path
        d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
        fill="#F15946"
      />
    </Svg>
  );
};

export const BottomCurve: SvgComponent = props => {
  return (
    <Svg
      data-name="Layer 1"
      preserveAspectRatio="none"
      viewBox="25 0 600 300"
      {...props}
      style={[{
        position: "absolute",
        zIndex: -1,
        transform: [{
          rotate: "180deg",
        }],
      }, props.style]}
    >
      <Path
        fill="#F15946"
        d="M0 0v7.23c0 58.29 268.63 105.54 600 105.54s600-47.25 600-105.54V0z"
      />
    </Svg>
  );
};

export const HumanFace: SvgComponent = props => {
  return (
    <Svg
      viewBox="0 0 288 360"
      y={110}
      x={110}
      {...props}
      style={[{
        position: "absolute",
        zIndex: 1,
      }, props.style]}
    >
      <Path d="M130.02 1.022c11.442-2.082 23.338-.771 34.459 2.055 2.323.528 4.528 1.428 6.922 1.725 9.334 1.432 18.813 4.039 26.139 9.504 3.356 2.367 5.31 5.982 8.998 8.023 2.112 1.233 4.721 1.301 7.087 1.94 11.13 2.571 21.41 7.429 30.711 13.294 5.856 3.708 11.374 7.81 16.687 12.097 2.639 2.189 5.477 4.203 7.854 6.621 7.428 7.319 12.002 16.381 16.43 25.259.856 1.548 1.203 3.252 1.592 4.926 1.182 5.505 1.371 11.155.773 16.727-.347 3.25-1.162 6.44-1.714 9.663-.558 3.093-.966 6.229-2.077 9.217-.519 1.467-1.244 2.868-1.943 4.271-5.396 11.186-10.335 22.531-15.73 33.716-.251.858-1.398.886-2.218 1.015-3.598.317-6.945-1.2-10.015-2.649-1.483-.775-3.134-1.296-4.563-2.145 1.158-4.332 4.038-8.127 5.456-12.378-3.653-.045-7.41-.391-10.985.456-2.349.491-4.043 2.088-6.126 3.045-3.433 1.655-7.206 2.9-10.11 5.279-1.164.987-2.256 2.148-2.684 3.543 1.639 1.44 3.641 2.532 5.272 3.984-.782.876-1.962 1.377-2.937 2.067-2.658 1.772-5.771 3.555-9.275 3.219-3.756-.405-7.688-.606-11.077-2.22-1.978-.928-3.548-2.925-3.005-4.938 3.369-1.488 7.079-2.574 9.955-4.797-.395-.546-1.06-.861-1.658-1.2-3.303-1.752-7.225-2.612-10.101-4.946-.445-.438-1.114-.861-1.104-1.497 3.764-2.334 7.768-4.388 11.438-6.834-.12-.993-1.224-1.633-2.046-2.212-3.474-1.902-7.728-1.229-11.592-1.698-2.51-.192-5.382-1.035-6.56-3.147 1.542-1.992 2.96-4.29 5.437-5.502 4.545-1.335 9.514-.521 14.082-1.775 1.333-.363 2.666-.811 3.803-1.539-.457-1.261-1.813-2.053-3.094-2.619-3.836-1.605-8.343-.945-12.2-2.493-1.445-.609-2.677-1.638-3.342-2.922 1.652-1.536 3.808-2.568 5.714-3.844.878-.469 1.73-1.332 2.866-1.06 3.208.504 6.448 1.035 9.716 1.068.671-1.041 1.143-2.185 1.456-3.346-.709-.734-1.756-1.115-2.687-1.577-5.862-2.661-12.468-3.606-18.945-4.326-2.353-.33-4.839-.252-7.029-1.179-2.918-1.186-5.081-3.337-7.61-5.012-.923-.627-1.98-1.08-2.892-1.719.566-2.371 1.301-4.75 1.143-7.195-.036-1.617-.537-3.183-.78-4.778.168-.427.637-.679 1.004-.97 3.175-2.147 6.51-4.235 10.363-5.346 6.719-1.911 13.846-2.415 20.879-2.346 9.144-.111 18.311.828 27.43-.063-.898-1.368-2.092-2.562-3.199-3.798-1.127-1.134-2.31-2.436-4.064-2.796-5.573-1.227-11.344-1.71-17.081-1.551-2.164.152-4.338.152-6.504.272-6.979.531-13.88 1.626-20.777 2.667-6.746 1.209-13.869-.982-20.438 1.264-7.406 2.57-15.499 1.584-23.243 1.422-3.942.068-7.896-.132-11.779-.744-4.971-.888-9.787-2.337-14.449-4.071-2.242-.789-3.771-2.538-5.151-4.19-5.308-6.874-4.707-15.876-10.003-22.75-1.228-1.653-3.908-1.413-5.641-.556-7.891 4.167-14.806 9.56-21.573 14.995-1.042 1.011-2.704.618-4.071.678-1.636-.11-3.445.229-4.934-.521-1.968-1.758-2.431-4.338-2.558-6.699-.377-5.595 2.896-10.794 6.843-14.985 2.636-2.58 5.29-5.182 8.375-7.362 7.724-5.445 17.127-8.919 26.854-10.472 1.142-.183 2.382-.255 3.342-.899 4.81-3.054 8.797-7.05 13.966-9.682 2.56-1.358 5.51-2.093 8.47-2.651m125.48 111.52c-1.666.552-3.431 1.296-4.452 2.623 2.032 3.546 5.24 6.915 9.67 8.208 1.043.426 1.894-.426 2.63-.948 1.982-1.604 3.847-3.615 4.16-6.042.266-1.896-1.229-4.067-3.506-4.293-2.82-.39-5.78-.37-8.5.45m-12.2 18.86c.668 1.254 1.887 2.195 3.08 3.069 2.64 1.83 5.946 3.198 9.386 3 2.938-.179 5.068-2.142 7.339-3.549.008-.084.014-.255.017-.339-2.008-1.794-4.705-2.916-7.438-3.595-4.1-.96-8.83-.75-12.39 1.42zM54.955 57.947c1.23-.939 2.345-2.004 3.688-2.82 1.046.699 1.778 1.692 2.869 2.343 1.611.858 3.452 1.401 5.352 1.365-1.434 1.122-2.841 2.27-4.151 3.504-6.623 5.81-13.746 11.306-19.032 18.148-2.177 2.403-4.534 4.691-6.399 7.302-1.18 1.521-2.105 3.174-3.071 4.803-2.006 2.838-4.233 5.554-6.082 8.477-.6 1.05-1.364 2.016-2.03 3.036-.623.93-.945 1.977-1.397 2.973-.511 1.156-1.156 2.271-1.524 3.475-.574 1.731-.642 3.55-1.063 5.309-1.628 6.689-5.435 12.876-6.318 19.719-.253 2.041-1.683 3.805-1.854 5.866-.227 2.166-1.281 4.185-1.416 6.366-1.031 3.843-1.303 7.797-1.893 11.707-.668 6.396-1.117 12.844-.537 19.261.129 1.899.471 3.79.451 5.701-.01 7.635-.117 15.321 1.256 22.888.325 2.455 1.271 4.813 1.49 7.278.146 1.771 1.035 3.43.998 5.218.145 1.929.157 3.941 1.076 5.739 2.191 4.831 1.91 10.202 4.097 15.033.589 1.513.836 3.123 1.662 4.566.991 1.728 1.483 3.629 2.462 5.366 1.314 2.193 1.494 4.733 2.643 6.988 1.392 2.647 1.861 5.576 3.22 8.239 1.145 2.284 1.597 4.764 2.506 7.117a46.129 46.129 0 004.357 10.288c4.048 7.548 7.85 15.424 14.353 21.654.998.97 1.688 2.13 2.482 3.226 4.302 5.935 9.988 11.004 14.116 17.047.73 1.06 1.341 2.188 2.181 3.189 7.007 8.217 14.22 16.688 24.236 22.291 2.543 1.313 5.111 2.871 8.136 3.129 3.253.348 6.547-.39 9.409-1.737 1.821-.885 3.8-1.578 5.365-2.812.905-.727 1.837-1.429 2.907-1.955 2.353-1.164 4.257-2.862 6.239-4.436 2.616-2.517 6.208-3.957 9.256-6.006 14.133-9.787 25.737-21.971 37.152-34.086 8.481-8.826 15.577-18.563 23.35-27.854 2.438-3.046 5.215-5.872 7.721-8.863 3.35-5.577 7.062-10.979 10.732-16.396 1.417-2.343 2.812-4.78 3.13-7.457 2.667-.128 5.348-.063 8.02-.03-2.048 6.036-5.843 11.438-8.667 17.189-1.3 2.348-2.159 4.896-3.914 7.029-1.478 1.837-2.5 3.937-4.24 5.604-1.084 1.254-1.952 2.648-3.216 3.779-6.146 6.157-10.026 13.711-15.688 20.181-2.61 2.895-5.618 5.489-8.36 8.288-1.666 1.655-3.089 3.482-4.699 5.182-7.791 8.335-17.072 15.467-25.282 23.471-4.116 3.948-9.574 6.579-13.787 10.44-.892.831-2.009 1.431-3.034 2.124-1.245.818-1.992 2.074-3.25 2.878a13.847 13.847 0 00-2.489 2.01c-1.666 1.694-3.808 2.952-6.006 4.06-3.884 1.968-7.979 3.601-12.18 4.98-2.489.917-5.3.817-7.867.222-5.825-1.355-11.166-3.973-16.012-7.063-11.902-7.555-20.452-18.193-29.701-28.01-1.907-2.04-3.974-3.98-5.53-6.249-2.899-4.052-4.937-8.529-8.008-12.489-1.447-1.905-3.322-3.528-4.707-5.47-3.35-4.527-5.242-9.712-8.255-14.396-.952-1.582-2.396-2.956-2.876-4.733-3.229-9.693-8.882-18.688-11.161-28.635a47.807 47.807 0 00-4.43-12.252c-1.594-2.761-1.467-6.072-3.459-8.688-1.145-1.491-1.43-3.301-1.838-5.021-.332-1.439-1.072-2.787-1.315-4.246-.634-3.064-1.413-6.11-1.823-9.207-.57-3.222-1.262-6.44-1.313-9.711-.06-4.106-.138-8.224-.638-12.313-.84-5.469-1.608-10.987-1.266-16.515 1.076-9.044.532-18.245 2.817-27.164.364-1.209.938-2.355 1.411-3.531 3.947-10.18 5.449-20.936 9.322-31.136.646-1.65 1.68-3.15 2.51-4.729 4.302-8.021 7.744-16.492 13.637-23.772 1.372-1.779 3.116-3.31 4.474-5.098 6-7.691 12.925-14.832 20.696-21.183z" />
      <Path d="M56.258 90.907c1.906-.769 3.753-1.692 5.776-2.211 2.917 1.407 4.703 4.229 5.097 7.077.528 3.692-.466 7.397-1.679 10.917-.418 1.529-2.352 2.206-3.997 1.991-3.744-.375-7.614-.594-11.282.333-6.225 1.552-11.282 5.253-16.75 8.112-2.084 1.167-5.245.048-5.924-2.021-.744-2.167-.147-4.461.49-6.589.34-1.021.586-2.173 1.577-2.881 5.06-4.028 11.306-6.591 17.14-9.608 3.244-1.621 6.165-3.712 9.552-5.115zM125.54 109.52c.86-1.578 2.561-3.181 4.738-2.971 2.729.354 5.176 1.649 7.292 3.153 3.418 2.517 6.037 5.733 8.856 8.742 4.304 4.739 9.208 9.103 12.824 14.293 1.958 2.796 2.174 6.237 1.525 9.394-.859 3.346-2.552 6.543-4.893 9.289-.41.003-.746-.222-1.072-.398-7.239-4.527-12.67-10.786-18.237-16.766-2.879-3.187-7.901-3.906-10.983-6.883-1.024-.954-1.511-2.217-1.95-3.441-.872-2.411-1.29-4.985-.882-7.503.32-2.45 1.61-4.68 2.77-6.9zM43.691 118.08c3.07-.501 6.201.384 8.669 1.986 4.501 2.87 7.727 7.293 8.734 12.091.227 3.618.319 7.254.042 10.875-.888 6.447-3.119 12.79-6.9 18.398-1.289 2.059-2.958 4.039-5.393 5.141-5.131 2.349-11.436 1.953-16.602-.105-1.485-.54-2.273-1.836-3.13-2.939-4.042-5.403-5.985-11.914-5.88-18.35.094-8.076 3.186-16.06 8.513-22.636 1.107-1.395 2.841-2.289 4.641-2.851 2.373-.74 4.827-1.26 7.306-1.62m-11.886 13.2c-1.854 4.936-2.028 10.249-1.511 15.385 2.135.167 4.278-.255 6.417-.023 2.441.183 5.18.705 6.756 2.492 2.07 2.691 3.556 5.691 5.663 8.362a4.19 4.19 0 00.994-1.161c2.88-4.87 4.258-10.282 5.16-15.67.188-1.284-.343-2.522-.634-3.759-1.001-3.747-2.141-7.604-4.793-10.747-2.001-2.382-4.95-4.308-8.3-4.866-4.75 1.83-8.147 5.76-9.752 10zM119.8 140.56c3.129-.486 6.588-.564 9.517.65a46.732 46.732 0 018.775 8.821c.774 1.074 1.558 2.169 1.981 3.396 1.385 4.805 2.646 9.748 2.091 14.731-.174 2.979-1.628 5.712-2.612 8.52-1.471 4.138-3.26 8.567-7.359 11.276-1.885 1.125-3.179 2.872-5.214 3.814-5.798 2.834-13.455 2.243-18.766-1.181-2.269-1.403-3.473-3.678-4.728-5.767-5.995-10.422-6.154-23.558.691-33.705 2.328-3.321 5.133-6.597 9.125-8.487 2.02-.99 4.24-1.66 6.5-2.07m.98 5.01c-3.421 1.698-7.075 3.255-9.729 5.875-1.505 1.446-2.252 3.321-3.108 5.094-.789 1.731-1.639 3.459-2.144 5.277-.288.979.51 1.856 1.135 2.595 3.079 3.21 8.427 3.81 11.419 7.111 2.037 2.272 1.861 5.363 1.424 8.065-.351 2.411-.672 5.26 1.33 7.216 1.23-.035 2.42-.369 3.613-.611 1.688-.402 3.671-.85 4.545-2.319 2.884-4.923 4.934-10.267 5.596-15.788.5-5.16-.281-10.573-3.178-15.15-1.898-2.124-3.387-4.578-5.746-6.36-1.39-.95-3.43-1.9-5.15-1zM67.344 156.39c2.133-2.709 4.368-5.56 7.642-7.284.771.944 1.822 2.088 1.244 3.314-1.871 5.122-5.753 9.427-9.761 13.408a1088.293 1088.293 0 01-12.817 12.188c-4.006 3.699-8.158 7.327-12.931 10.276-2.604 1.484-4.819 3.572-6.07 6.081 3.231 2.193 6.812 4.035 10.547 5.508 3.933 1.595 8.283 2.008 12.455 2.896 1.937.495 4.142 1.106 5.234 2.713.13 1.206-.489 2.472-1.648 3.158-1.447.906-3.298.999-5.016.96-3.029-.003-5.813-1.173-8.651-1.952-7.734-2.422-15.558-5.781-20.61-11.659-.511-.688-1.443-1.437-1.011-2.331 1.187-3.294 4.274-5.69 7.396-7.626 3.104-1.971 6.477-3.657 9.219-6.031 8.817-7.4 18.131-14.57 24.778-23.63zM240.69 161.96c2.358-.135 4.733-.327 7.096-.111 3.926.472 7.693 1.821 10.909 3.85 4.425 2.729 7.907 6.528 10.38 10.723 3.623 6.255 4.257 13.461 3.802 20.36-.254 2.862-.274 5.823-1.587 8.511-.888 1.741-1.419 3.615-2.552 5.26-1.199 1.804-2.162 3.711-3.226 5.574-.983 1.752-2.776 2.967-4.121 4.486-1.119 1.128-1.893 2.513-3.238 3.465-2.769 2.078-5.482 4.215-8.349 6.191-6.861 4.474-15.493 5.739-23.327 8.358-2.421.566-4.943.455-7.422.458-1.554.049-2.985-.533-4.457-.87-.925-.204-1.819-.548-2.52-1.125-3.14-2.437-6.386-4.862-8.71-7.956 1.192-.867 2.54-1.612 3.993-2.104 2.272 1.591 4.486 3.313 7.19 4.345 3.228 1.397 7.124 1.865 10.552.75 6.25-1.813 12.227-4.584 17.031-8.563 2.443-1.989 4.396-4.374 6.444-6.66 3.466-4.013 6.709-8.226 8.951-12.874.97-1.965 1.654-4.025 2.334-6.078.813-2.325.523-4.782.68-7.177.15-2.457-.241-4.896-.484-7.339-.571-3.849-2.602-7.545-5.854-10.204-2.231-1.846-4.697-3.579-7.648-4.44-2.21-.723-4.597-.759-6.924-.867-3.018-.149-5.965.675-8.696 1.72-1.754.692-3.604 1.334-4.955 2.579-3.35 2.974-6.26 6.324-9.913 9.031-.49.31-.968.756-1.618.735-1.072-1.485-1.419-3.364-.877-5.056.474-1.254 1.4-2.321 2.31-3.356 2.979-3.243 6.97-5.599 10.938-7.818 1.852-1.008 3.634-2.182 5.731-2.774 2.64-.75 5.43-.86 8.16-1.03zM101.52 218.1c1.886-.771 3.898-1.808 6.062-1.362 7.232 1.104 13.938 4.452 18.889 9.181 1.086 1.061 2.231 2.133 2.835 3.482 2.358 5.104 4.964 10.112 7.343 15.208 2.753 7.075 3.147 14.644 3.014 22.058-.236 4.008-.271 8.034-1.021 12.004-1.035 7.264-3.203 14.61-8.002 20.707-.62.72-1.117 1.586-2.012 2.078-1.07-1.007-2.108-2.073-2.876-3.274.915-2.086 2.17-4.058 2.938-6.195 4.191-10.305 4.305-21.448 3.283-32.223-.346-2.318-.339-4.703-1.199-6.938-1.954-5.157-3.103-10.555-5.659-15.529-1.52-3.068-3.699-5.838-6.318-8.265-2.509-2.917-6.486-4.294-10.099-5.865-2.73-1.23-5.6-2.66-7.16-5.08z" />
      <Path d="M36.259 228.76c2.02-.59 4.145-.047 6.185.15 10.552 1.486 19.811 6.408 29.307 10.387 2.537 1.126 5.262 1.896 7.737 3.136 5.557 2.767 11.96 3.786 18.223 4.533 1.361.165 2.736.43 4.114.276 1.841-.211 3.63-.648 5.413-1.087 1.398-.313 2.557-1.102 3.747-1.778 1.258-.738 2.074-1.894 3.246-2.712.418-.039.825.012 1.227.146.031 1.604-.414 3.18-.596 4.772-.566 3.879-.542 7.791-.741 11.694-.137 6.401.188 12.802.014 19.204.015 2.198-.141 4.395-.041 6.598.228 9.984-6.644 19.762-16.865 24.168-2.862 1.207-5.928 2.104-9.103 2.371-2.536.165-4.95-.728-7.185-1.669-2.843-1.235-5.876-2.12-8.625-3.521-7-3.421-12.752-8.444-17.87-13.778-5.368-5.183-8.382-11.755-11.625-18.044-1.425-2.812-3.185-5.479-4.576-8.302-2.438-4.022-2.985-8.61-4.35-12.942-.336-1.188-.438-2.415-.782-3.598-.912-2.758-2.242-5.402-2.924-8.221-.642-2.517-1.165-5.094-1.224-7.674.645-.543 1.419-.939 2.14-1.396 1.637-1.02 3.214-2.19 5.158-2.72m1.378 7.98c-.124.717.206 1.428.356 2.13.97 3.514 1.591 7.239 4.021 10.267 1.3 1.752 3.359 2.865 5.163 4.173 3.762 2.645 7.636 5.381 12.293 6.7 1.916.582 3.945.763 5.923 1.141 5.037 1.05 9.739 2.986 14.58 4.561 2.739.855 5.51 1.859 8.472 1.823 5.162.149 10.757.021 15.217-2.557 1.56-.834 2.698-2.137 3.435-3.581.703-1.32 1.488-2.616 2.02-4-.696-1.248-1.865-2.227-2.809-3.323-.91-.924-1.662-2.004-2.807-2.722-1.245-.11-2.486.102-3.727.113-6.765.054-13.624-.762-19.89-3.075-11.508-3.972-22.42-9.126-33.843-13.271-1.262-.426-2.485-1.006-3.833-1.184-1.598.83-3.107 1.81-4.57 2.81z" />
    </Svg>
  );
};

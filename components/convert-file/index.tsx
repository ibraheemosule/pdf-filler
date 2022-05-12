import { IConvertFile } from "../../ts-types/componentTypes";
import { ConvertFileStyle } from "../../styles/ConvertFileStyle.styled";

const ConvertFile: React.FC<IConvertFile> = () => {
  return (
    <ConvertFileStyle>
      <div className="file-to-convert">
        <div className="fileUpload">
          <input type="file" className="upload" />
          <span>+</span>
        </div>
        <button>Convert</button>
      </div>
    </ConvertFileStyle>
  );
};

export default ConvertFile;

{
  /* <Image src={plusIcon} height={30} width={30} alt="menu" /> */
}

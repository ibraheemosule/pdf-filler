import { IConvertFile } from '../../ts-types/componentTypes';
import { ConvertFileStyle } from '../../styles/ConvertFileStyle.styled';
import { BtnStyle } from '../../styles/BtnStyle.styled';
import { useState, MouseEvent, useEffect, useRef } from 'react';
import axios from 'axios';
import $ from 'jquery';
import { saveAs } from 'file-saver';

let apiKey = 'dfb1543b-82a8-48ba-a53b-09051503d4fb';

const ConvertFile: React.FC<IConvertFile> = () => {
  const [convert, setConvert] = useState<string>();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const error = useRef<any>('');

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/convert');
      console.log('here', data);
    })();
  });

  const submitFile = async () => {
    if (!file) {
      setFile('Upload a File to Convert');
      setTimeout(() => {
        setFile('');
      }, 2000);
      return;
    }
    if (!convert) {
      error.current = file;
      setFile('Select Format');
      setTimeout(() => {
        setFile(error.current);
        error.current = '';
      }, 2000);
      return;
    }

    var form = new FormData();
    const { files } = fileInput.current!;
    console.log(file[0].name);
    if (!files) return;
    form.append('inputFile', files[0]);

    // var settings = {
    //   url: 'https://api.cloudmersive.com/convert/docx/to/pdf',
    //   method: 'POST',
    //   timeout: 0,
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     Apikey: apiKey,
    //   },
    //   processData: false,
    //   mimeType: 'multipart/form-data',
    //   data: form,
    // };
    // $.ajax(settings).done(function (response) {
    //   const blob = new Blob([response], { type: 'application/pdf' });
    //   const data = window.URL.createObjectURL(blob);
    //   var link = document.createElement('a');
    //   link.href = data;
    //   link.download = 'file.pdf';
    //   link.click();
    // });
    (async () => {
      const data = axios.post('/api/convert', form, {
        timeout: 0,
        headers: {
          Accept: 'Application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
    })().then((res) => console.log(res, 'here'));
  };

  const fileType = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const type = e.currentTarget.textContent!;
    setConvert(type);
  };

  return (
    <ConvertFileStyle showDropdown={dropdown}>
      <div className='file-to-convert'>
        <div className='fileUpload'>
          <input
            ref={fileInput}
            type='file'
            className='upload'
            onChange={(e) => setFile(e.target.value)}
            accept='.xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf'
          />
          <span>+</span>
        </div>
        <div className='file-settings'>
          <div className='btn_wrapper'>
            <BtnStyle borderRadius='10px 0 0 10px' onClick={submitFile}>
              {file && !dropdown ? 'Proceed' : 'Convert To'}
            </BtnStyle>
            <BtnStyle
              borderRadius='0 10px 10px 0'
              padding='0.5rem'
              className='dropdown'
              onClick={() => setDropdown((val) => !val)}
            >
              <span>{convert ?? 'Select'}</span>
              <ul>
                <li>
                  <button onClick={(e) => fileType(e)}>PDF</button>
                </li>
                <li>
                  <button onClick={(e) => fileType(e)}>DOCX</button>
                </li>
              </ul>
            </BtnStyle>
          </div>
          <div className='file-name'>
            {file?.slice(file.lastIndexOf('\\') + 1)}
          </div>
        </div>
      </div>
    </ConvertFileStyle>
  );
};

export default ConvertFile;

{
  /* <Image src={plusIcon} height={30} width={30} alt="menu" /> */
}

// dfb1543b-82a8-48ba-a53b-09051503d4fb

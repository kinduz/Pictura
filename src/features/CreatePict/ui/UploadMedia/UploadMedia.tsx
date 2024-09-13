import {
  ChangeEvent, FC, useState,
} from 'react';
import { FiUpload } from 'react-icons/fi';
import { Flex } from 'antd';
import { ErrorInputMessage } from '@shared/styles';
import { UploadImageDescription, UploadImageInfo, UploadMediaStyled } from './UploadMedia.styled';

type TProps = {
  setNotDisable: () => void;
}

export const UploadMedia:FC<TProps> = ({ setNotDisable }) => {
  const [inputFile, setInputFile] = useState<File | Blob | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.type.slice(0, 5) !== 'image') {
        setErrorMsg('Только изображения или видео файлы могут быть пиктами');
      } else {
        setErrorMsg('');
        setNotDisable();
        setInputFile(file);
      }
    }
  };

  return (
    <Flex vertical align="center" gap={16}>
      <UploadMediaStyled>
        <input
          type="file"
          className="input__make"
          onChange={(e) => handleInput(e)}
          accept=".jpg, .png, .webp, .svg, .jpeg"
        />
        <UploadImageInfo vertical align="center" justify="space-between">
          <Flex vertical align="center" gap={20}>
            <FiUpload size="44" />
            <span>Выберите файл или перетащите его сюда</span>
          </Flex>
          <UploadImageDescription>
            {`Советуем использовать файлы высокого разрешения в формате .jpg
        (размером меньше 20 МБ) или .mp4 (размером меньше 200 МБ)`}
          </UploadImageDescription>
        </UploadImageInfo>
      </UploadMediaStyled>
      {errorMsg && (
        <ErrorInputMessage>{errorMsg}</ErrorInputMessage>
      )}
    </Flex>
  );
};

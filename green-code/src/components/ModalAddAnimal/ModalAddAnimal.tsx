import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useState } from "react";
import style from './ModalAddAnimal.module.css';

import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Button, message } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import Map from '../Map/Map.tsx'

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';


const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

  type formType = {
    name: string;
    type: string;
    squad: string;
    family: string;
    description: string;
    list_park: any[];
    image: string;
  };


  const initialForm = {
    name: '',
    type: '',
    squad: '',
    family: '',
    description: '',
    list_park: [],
    image: '',
    // date: '',
    author: '',
    comment: ''
  };


//   const initialForm = {name: '', type: '', squad: '', 
//     family: '', description: '',
//     list_park: [], image: '' }

const ModalContent = ({setModalOpen}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [formControl, setFormControl] = useState<formType|any>(initialForm);
    const [fileList, setFileList] = useState<UploadFile[][]>([[], [], []]);


    useEffect(() => {console.log(formControl, fileList)}, [formControl, fileList])

    useEffect(() => {
        const updateImages = async () => {
          const newImages = await Promise.all(
            fileList.map(async (files) => {
              if (files.length > 0) {
                const file = files[0].originFileObj as FileType;
                return await getBase64(file);
              } else {
                return '';
              }
            })
          );
          setFormControl((prevFormControl) => ({
            ...prevFormControl,
            image: newImages[0]
          }));
        };
    
        updateImages();
      }, [fileList]);
    
      const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj as FileType);
        }
    
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
      };
    
      const handleChange = (index: number): UploadProps['onChange'] => ({ fileList: newFileList }) => {
        const newFileLists = [...fileList];
        newFileLists[index] = newFileList;
        setFileList(newFileLists);
    
        const newImages = [...formControl.images];
        if (newFileList.length > 0) {
          newImages[index] = newFileList[0].url || newFileList[0].thumbUrl || '';
        } else {
          newImages[index] = '';
        }
        setFormControl({
          ...formControl,
          images: newImages
        });
      };


      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormControl({
          ...formControl,
          [name]: value
        });
      };
    
      const handleDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        setFormControl({
          ...formControl,
          date: dateString
        });
      };
    
      const uploadButton = (
        <button style={{ border: 0, background: 'none'}} type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Отправить наблюдение</div>
        </button>
      );

      
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://194.58.98.44:8000/api/v1/add_creatures', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formControl),
        });
        if (response.ok) {
          message.success('Форма успешно отправлена!');
          setFormControl(initialForm);
          setFileList([[], [], []]);
        } else {
          message.error('Ошибка при отправке формы.');
        }
      } catch (error) {
        message.error('Ошибка при отправке формы.');
      }
    } else {
      message.error('Пожалуйста, заполните все поля и загрузите хотя бы одно изображение.');
    }
  };

      const validateForm = (): boolean => {
        const { type, date, author, comment, image } = formControl;
        if ( !type || !date || !author || !comment || !image) {
          return false;
        }
        return true;
      };


    return(
    <>
        <div className={style.overlay} onClick={() => {setModalOpen(false)}}></div>
        <div className={style.modal}>
        <form onSubmit={handleSubmit}>
            <h1>Добавление данных</h1>
            <button onClick={() => {setModalOpen(false)}} className={style.btn_close}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 21L11 11M11 11L21 1M11 11L1 1M11 11L21 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </button>
            <p>Расскажите больше о животном или растении, которое вы видели.</p>
            <h2 className={style.title}>Фотографии животного/растения*</h2>
            <div className={style.photo_container}>
            {[0, 1, 2].map(index => (
              <div key={index} className={style.upload_field}>
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                  listType="picture-card"
                  fileList={fileList[index]}
                  onPreview={handlePreview}
                  onChange={handleChange(index)}
                >
                  {fileList[index].length >= 1 ? null : uploadButton}
                </Upload>
              </div>
            ))}
            {previewImage && (
              <Image
                width={200}
                style={{ display: 'block' }}
                src={previewImage}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                }}
              />
            )}
            </div>
           
              <div className={style.field}>
            <h2 className={style.title}>Дата наблюдения*</h2>
            <DatePicker format={'YYYY-MM-DD'} onChange={handleDateChange} style={{ width: '149px' }} />
          </div>
          <div className={style.field}>
            <h2 className={style.title}>Место наблюдения*</h2>
            <Map parks={[]} width={'384px'} height={'192px'} />
          </div>
          <div className={style.field}>
            <h2 className={style.title}>Вид животного <span>Возможно на фото: Ёж обыкновенный</span></h2>
            <input name="type" placeholder={'Ёж обыкновенный'} value={formControl.type} onChange={handleInputChange} />
          </div>
          <div className={style.field}>
            <h2 className={style.title}>Автор снимка</h2>
            <input name="author" placeholder={'Иванов Иван'} value={formControl.author} onChange={handleInputChange} />
          </div>
          <div className={style.field}>
            <h2>Комментарий</h2>
            <input name="comment" placeholder={'Например, количество особей'} value={formControl.comment} onChange={handleInputChange} />
          </div>
            <Button type="primary" htmlType="submit" style={{backgroundColor: '#6FB0A5'}}>
            Отправить наблюдение
             </Button>
            </form>
            </div>
            </>
    )
}

const ModalAddAnimal = ({modalOpen, setModalOpen}) => {
  return (
    <>
      {modalOpen &&
        createPortal(
          <ModalContent setModalOpen={() => setModalOpen(false)} /> ,
          document.body
        )}
    </>
  );
};

export default ModalAddAnimal;
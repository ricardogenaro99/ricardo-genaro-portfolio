import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { RiExternalLinkFill, RiMailFill, RiWhatsappFill } from "react-icons/ri";
import { FormContactame, MensajeEnviado } from "app/components/contactame";
import ValuesContactame from "app/components/contactame/components/ValuesContactame";
import { SectionExplorerSobreMi } from "app/components/sobre-mi";
import { useForm } from "app/hooks/useForm";
import { Explorer, Loader, EditorTabBar } from "app/shared/components";
import { URL_MAIL, URL_WSP } from "app/shared/utils/globalConsts";
import { validationsForm } from "app/shared/validators/ValidationsForm";
import {
  ContainerCenterTemplate,
  ContainerExplorerAndContentTemplate,
  ContentGridTemplate,
  WorkStationSectionTemplate,
  EditorPaneTemplate,
} from "app/templates/Templates";

const SectionsExplorer = [
  {
    title: "contactos",
    content: (
      <SectionExplorerSobreMi>
        <span className="section_explorer-flex item-list-span">
          <RiMailFill />
          <a href={URL_MAIL}>mandame_un_correo</a>
        </span>
        <span className="section_explorer-flex item-list-span">
          <RiWhatsappFill />
          <a href={URL_WSP} target="_blank" rel="noopener noreferrer">
            mandame_un_whatsapp
          </a>
        </span>
      </SectionExplorerSobreMi>
    ),
  },
  {
    title: "tambien-encuentrame-en",
    content: (
      <SectionExplorerSobreMi>
        <span className="section_explorer-flex item-list-span">
          <RiExternalLinkFill />
          <a
            href="https://www.instagram.com/ricardogenaro99/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </span>
        <span className="section_explorer-flex item-list-span">
          <RiExternalLinkFill />
          <a
            href="https://www.linkedin.com/in/ricardogenaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </span>
      </SectionExplorerSobreMi>
    ),
  },
];

const initialForm = {
  nombre: null,
  email: null,
  mensaje: null,
};

const Contactame = () => {
  const { form, loading, response, handleChange, handleSubmit, resetForm } =
    useForm(initialForm, validationsForm);

  const contactameTabs = [{ name: "contactame.js", path: "/contactame" }];
  const location = useLocation();
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    if (scrollRef1.current) scrollRef1.current.scrollTop = 0;
    if (scrollRef2.current) scrollRef2.current.scrollTop = 0;
  }, [location.pathname]);

  return (
    <ContainerExplorerAndContentTemplate>
      <Explorer sections={SectionsExplorer} />
      <EditorPaneTemplate>
        <EditorTabBar tabs={contactameTabs} />
        <ContentGridTemplate gridTemplateColumns="1fr 1fr">
          <WorkStationSectionTemplate ref={scrollRef1}>
            <ContainerCenterTemplate>
              {!loading && !response && (
                <FormContactame
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  form={form}
                />
              )}
              {loading && <Loader />}
              {response && <MensajeEnviado clickNuevoMensaje={resetForm} />}
            </ContainerCenterTemplate>
          </WorkStationSectionTemplate>
          <WorkStationSectionTemplate ref={scrollRef2}>
            <ContainerCenterTemplate>
              <ValuesContactame form={form} />
            </ContainerCenterTemplate>
          </WorkStationSectionTemplate>
        </ContentGridTemplate>
      </EditorPaneTemplate>
    </ContainerExplorerAndContentTemplate>
  );
};

export default Contactame;

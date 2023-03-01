import React, { useContext, useState } from "react"
import { ModalContext } from "../../Context/ModalContext"
import { BiEditAlt, BiImport, BiExport, BiFullscreen } from "react-icons/bi";
import Select from 'react-select'
import { languageMap } from "../../Context/PlaygroundContext";
import CodeEditor from "./CodeEditer"

const EditContainer = ({ title, currentLanguage, setCurrentLanguage, currentCode, setCurrentCode, folderId, playgroundId, saveCode, runCode, isFullScreen, setIsFullScreen, getFile }) => {
  const { openModal } = useContext(ModalContext)
  const themeOptions = [
    { value: "githubDark", label: "Github Dark" },
    { value: "githubLight", lablel: "github white" },
    { value: "bespin", label: "Bespin" },
    { value: "duotoneDark", label: "Duotone Dark" },
    { value: "duotoneLight", label: "Duotone Light" },
    { value: "dracula", label: "Dracula" },
    { value: "xcodeDark", label: "Xcode Dark" },
    { value: "xcodeLight", label: "Xcode Light" },
    { value: "vscodeDark", label: "Vscode Dark" },
    { value: "vscodeLight", label: "Vscode Light" },
    { value: "okaidia", label: "Okaidia" },
  ]
  const languageOptions = [
    { value: "cpp", label: "C++" },
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
    { value: "java", label: "java" },
  ]
  const [currentTheme, setCurrentTheme] = useState(themeOptions[0])
  const handleThemeChange = (option) => { setCurrentTheme(option) }
  const [language, setLanguage] = useState(() => {
    for (let i = 0; i < languageOptions.length; i++) {
      if (languageOptions[i].value === currentLanguage) {
        return languageOptions[i];
      }
    }
    return languageOptions[0];
  })

  const handleLanguageChange = (option) => {
    setLanguage(option)
    setCurrentLanguage(option.value)
    setCurrentCode(languageMap[option.value].defaultCode)
  }
  return (
    <div className={`flex flex-col ${isFullScreen ? "h-[100vh]" : "h-[calc(100vh_-_4.5rem)]"}`}>
      {!isFullScreen && (
        <div className="bg-white flex justify-between items-center flex-wrap p-4">
          <div className="flex gap-4 items-center">
            <h3 className="font-semibold">{title}</h3>
            <BiEditAlt
              style={{ fontSize: "1.5rem" }}
              onClick={() =>
                openModal({
                  show: true,
                  modalType: 5,
                  identifiers: {
                    folderId: folderId,
                    cardID: playgroundId,
                  },
                })
              }
            />
            <button className="font-normal rounded-full p-2 bg-[#0097d7]" onClick={()=>saveCode()}>
              Save Code
            </button>
          </div>
          <div className="flex gap-4">
            <Select
              options={languageOptions}
              value={language} // default value or the changing value
              onChange={handleLanguageChange}
            />
            <Select
              options={themeOptions}
              value={currentTheme}
              onChange={handleThemeChange}
            />
          </div>
        </div>
      )}
      <CodeEditor currentCode={currentCode} setCurrentCode={setCurrentCode} currentLanguage={currentLanguage} currentTheme={currentTheme.value} isFullScreen={isFullScreen}/>
      {/* Home work */}
      {/* Foooter */}
      <div className="bg-white flex w-full justify-between p-4">
        <button
          className="flex gap-3 items-center"
          onClick={() => setIsFullScreen((isFullScreen) => !isFullScreen)}
        >
          <BiFullscreen style={{ fontSize: "1.5 rem" }} />{" "}
          {isFullScreen ? "Minimize Screen" : "Full Screen"}
        </button>

        <label className="flex gap-3 items-center" htmlFor="codefile">
          <input
            className="hidden"
            type="file"
            accept="."
            id="codefile"
            onChange={(e) => getFile((e, setCurrentCode))}
          />
          <BiImport style={{ fontSize: "1.5rem" }} /> Import Code
        </label>
        <a
          className="flex gap-3 items-center"
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(
            currentCode
          )}`}
          download="code.txt"
        >
          <BiExport style={{ fontSize: "1.5rem" }} />
          Export Code
        </a>
        <button
          onClick={runCode}
          className="font-normal rounded-full p-2 bg-[#0097d7]"
        >
          Run Code
        </button>
      </div>
    </div>
  )
}

export default EditContainer

'use client'

import { translationLanguages } from '@/assets/data/footer-items'
import Image from 'next/image'
import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { FaChevronUp, FaGlobe } from 'react-icons/fa6'

const LanguageDropdown = () => {
  const { i18n } = useTranslation()

  const [selectedLang, setSelectedLang] = useState('en')

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode)
    i18n.changeLanguage(langCode)
  }

  return (
    <Dropdown className="text-center text-md-end mt-3 mt-md-0" drop="up" align={'end'}>
      <DropdownToggle
        className="btn btn-sm btn-light mb-0 arrow-none icons-center"
        id="languageSwitcher"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        <FaGlobe className="me-2" />
        {translationLanguages.find((lang) => lang.value === selectedLang)?.name || 'Language'}

        <FaChevronUp className="ms-2" size={12} />
      </DropdownToggle>
      <DropdownMenu className="min-w-auto" aria-labelledby="languageSwitcher">
        {translationLanguages.map((lang, idx) => (
          <li key={lang.name + idx}>
            <DropdownItem onClick={() => handleLanguageChange(lang.value)} active={lang.value === selectedLang} className="me-4">
              <Image className="fa-fw me-2" src={lang.flag} alt={lang.name + '-flag'} style={{ width: 18 }} />
              {lang.name}
            </DropdownItem>
          </li>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LanguageDropdown

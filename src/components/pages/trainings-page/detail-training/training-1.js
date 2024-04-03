import { Button } from '@/components/button'
import React from 'react'

export default function Training1Section() {
  return (
    <div className="px-4 py-12 md:px-16 lg:px-20 bg-contact">
      <div className="mx-auto max-w-7xl">
        {/* Description */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold md:text-3xl">Description</h2>
          <p>
            <span className="text-secondary">Vendor:</span> Appsec.asia
          </p>
        </div>

        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          PENDAHULUAN
        </h4>
        <p className="mb-6">
          Kursus ini berfokus pada proses pengembangan perangkat lunak dengan
          menggunakan berbagai praktik Agile. Siswa akan mempelajari berbagai
          konsep Agile seperti Scrum, Extreme Programming, Lean, dan Kanban.
          Dengan beberapalatihan langsung, siswa akan belajar bagaimana
          menerapkan kerangka Agile dengan benar ke dalam perangkat lunak mereka
          proses pengembangan.
        </p>
        {/* Tujuan */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          TUJUAN
        </h4>
        <ul className="mb-6 ml-6 list-decimal">
          <li>
            Memahami prinsip dan nilai pengembangan perangkat lunak Agile.
          </li>
          <li>
            Menerapkan berbagai metodologi Agile, termasuk Scrum dan Kanban,
            pada proyek pengembangan perangkat lunak.
          </li>
          <li>
            Memfasilitasi upacara dan praktik Agile, seperti perencanaan sprint,
            stand-up harian, dan retrospektif.
          </li>
          <li>
            Kelola tim Agile dan berkomunikasi secara efektif di lingkungan
            Agile.
          </li>
          <li>Identifikasi tantangan dan solusi umum dalam adopsi Agile.</li>
          <li>Analisis studi kasus proyek Agile</li>
        </ul>
        {/* Fasilitas Pelatihan */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Fasilitas Pelatihan
        </h4>
        <ul className="mb-6 ml-6 list-decimal">
          <li>Trainer yang sudah berpengalaman</li>
          <li>Sertifikat dari Lembaga Training</li>
          <li>Modul</li>
          <li>Kaos / T-shirt dari Lembaga Training</li>
        </ul>
        {/* Waktu */}
        <h4 className="mb-4 text-lg font-semibold md:text-xl text-secondary">
          Waktu Pelaksanaan
        </h4>
        <div className="h-[0.5px] w-full bg-[#e2e2e2] my-6 md:my-8"></div>
        {/* Price */}
        <div className="flex items-center justify-between">
          <h4 className="mb-4 text-lg font-semibold">Price</h4>
          <Button>Rp 4.500.000</Button>
        </div>
      </div>
    </div>
  )
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './home.module.css';

export default function home() {
  const router = useRouter();

  useEffect(() => {
    const isAutenticado = localStorage.getItem('auth');
    if (!isAutenticado) {
      router.push('/login');
    }
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Bem-vindo <br />
            <span className={styles.highlight}>à Orbeey</span>
          </h1>
          <p className={styles.description}>
            Transformamos ideias em realidade com nossos serviços inovadores em tecnologia,
            finanças, criptomoedas, design, contabilidade e soluções bancárias. Explore nossas
            soluções e veja como podemos ajudar sua empresa a crescer.
          </p>
          <button className={styles.button}>➤ Saiba mais</button>
        </div>

        <div className={styles.fogueteWrapper}>
          <Image src="/foguete.png" alt="Foguete Orbeey" width={500} height={500} priority />
        </div>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.servicesTitle}>Serviços</h2>
        <p className={styles.servicesSubtitle}>Mais eficiência para qualquer modelo de negócio.</p>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Orbeey Technology</h3>
            <p className={styles.descriptionCard}>
              Nossa equipe de especialistas em tecnologia oferece soluções personalizadas para otimizar seus
              processos e inovar seus produtos. Desde o desenvolvimento de software até consultoria em TI,
              estamos prontos para transformar sua visão em realidade.
            </p>
            <button className={styles.cardButton}>➤ Saiba mais</button>
          </div>

          <div className={styles.card}>
            <h3>Orbeey Finance</h3>
            <p className={styles.descriptionCard}>
              Oferecemos serviços completos de consultoria financeira, ajudando sua empresa a planejar,
              gerenciar e crescer de maneira sustentável. Nossos consultores são experientes em planejamento
              financeiro, gestão de investimentos e estratégias fiscais.
            </p>
            <button className={styles.cardButton}>➤ Saiba mais</button>
          </div>

          <div className={styles.card}>
            <h3>Orbeey Coin</h3>
            <p className={styles.descriptionCard}>
              Especialistas em criptomoedas e blockchain, fornecemos consultoria e soluções para sua empresa
              adotar essa tecnologia inovadora. Desde a implementação até a gestão de ativos digitais, nossa equipe
              está pronta para orientar você em cada etapa.
            </p>
            <button className={styles.cardButton}>➤ Saiba mais</button>
          </div>
        </div>


        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Orbeey Design</h3>
            <p className={styles.descriptionCard}>Transforme sua marca com nossos serviços de design gráfico e web. Criamos identidades visuais impactantes e sites funcionais que capturam a essência do seu negócio. Nossos projetos são personalizados para atender às suas necessidades específicas.</p>
            <button className={styles.cardButton}>➤ Saiba mais</button>
          </div>

          <div className={styles.card}>
            <h3>Orbeey Contability</h3>
            <p className={styles.descriptionCard}>Com ampla experiência em contabilidade empresarial, oferecemos serviços de gestão fiscal e contábil para garantir que sua empresa esteja sempre em conformidade e bem gerida. Nossa equipe está pronta para ajudar você a alcançar a eficiência financeira.</p>
            <button className={styles.cardButton}>➤ Saiba mais</button>
          </div>

          <div className={styles.card}>
            <h3>Orbeey Law</h3>
            <p className={styles.descriptionCard}>Nossa missão é fornecer serviços jurídicos de alta qualidade, com uma equipe de advogados especializados prontos para atender suas necessidades específicas. Explore nossas áreas de atuação e descubra como podemos ajudar você.</p>
            <button className={styles.cardButton}>➤ Saiba mais</button>
          </div>
        </div>


      </section>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
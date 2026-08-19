import React from 'react';
import styled from 'styled-components';
import { LucideIcon } from 'lucide-react';
import { BorderTrail } from '@/components/core/border-trail';

interface SectionData {
  label: string;
  title: string;
  body: string;
}

interface AboutTiltCardProps {
  section: SectionData;
  Icon: LucideIcon;
  idx: number;
}

export const AboutTiltCard: React.FC<AboutTiltCardProps> = ({ section, Icon, idx }) => {
  return (
    <StyledTiltCard style={{ animationDelay: `${idx * 150 + 200}ms` }} className="opacity-0 animate-fade-up">
      <div className="container noselect">
        <div className="canvas">
          {/* 25-Cell Invisible 3D Hover Tracker */}
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`} />
          ))}

          {/* Actual Card Body with BorderTrail & Tilt */}
          <div
            id="card"
            className="group relative flex flex-col justify-start overflow-hidden rounded-xl border border-charcoal/10 bg-ivory/60 p-8 shadow-sm transition-all duration-300 hover:border-wine/25 hover:shadow-xl dark:border-cream/10 dark:bg-charcoal/40 dark:hover:border-terracotta/25"
          >
            {/* Border Trail */}
            <BorderTrail
              style={{
                boxShadow:
                  '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
              }}
              size={100}
            />

            {/* Icon */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-wine/20 text-wine transition-all duration-300 group-hover:scale-110 group-hover:bg-wine/5 dark:border-terracotta/25 dark:text-terracotta dark:group-hover:bg-terracotta/10">
              <Icon size={22} strokeWidth={1.5} />
            </div>

            {/* Label */}
            <p className="relative z-10 mt-6 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {section.label}
            </p>

            {/* Title */}
            <h3 className="relative z-10 mt-2 font-display text-2xl font-medium text-charcoal dark:text-cream">
              {section.title}
            </h3>

            {/* Body */}
            <p className="relative z-10 mt-4 text-sm leading-relaxed text-charcoal/65 dark:text-cream/55">
              {section.body}
            </p>
          </div>
        </div>
      </div>
    </StyledTiltCard>
  );
};

const StyledTiltCard = styled.div`
  width: 100%;
  height: 100%;

  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .canvas {
    perspective: 1000px;
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  #card {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 0;
    transform-style: preserve-3d;
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), filter 300ms ease;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }

  .tracker {
    position: absolute;
    inset: 0;
    z-index: 20;
    cursor: pointer;
  }

  /* Grid Area Assignments */
  .tr-1 { grid-area: 1 / 1; }
  .tr-2 { grid-area: 1 / 2; }
  .tr-3 { grid-area: 1 / 3; }
  .tr-4 { grid-area: 1 / 4; }
  .tr-5 { grid-area: 1 / 5; }
  .tr-6 { grid-area: 2 / 1; }
  .tr-7 { grid-area: 2 / 2; }
  .tr-8 { grid-area: 2 / 3; }
  .tr-9 { grid-area: 2 / 4; }
  .tr-10 { grid-area: 2 / 5; }
  .tr-11 { grid-area: 3 / 1; }
  .tr-12 { grid-area: 3 / 2; }
  .tr-13 { grid-area: 3 / 3; }
  .tr-14 { grid-area: 3 / 4; }
  .tr-15 { grid-area: 3 / 5; }
  .tr-16 { grid-area: 4 / 1; }
  .tr-17 { grid-area: 4 / 2; }
  .tr-18 { grid-area: 4 / 3; }
  .tr-19 { grid-area: 4 / 4; }
  .tr-20 { grid-area: 4 / 5; }
  .tr-21 { grid-area: 5 / 1; }
  .tr-22 { grid-area: 5 / 2; }
  .tr-23 { grid-area: 5 / 3; }
  .tr-24 { grid-area: 5 / 4; }
  .tr-25 { grid-area: 5 / 5; }

  /* 3D Tilt Rotations on Hover */
  .tr-1:hover ~ #card { transform: rotateX(12deg) rotateY(-8deg); }
  .tr-2:hover ~ #card { transform: rotateX(12deg) rotateY(-4deg); }
  .tr-3:hover ~ #card { transform: rotateX(12deg) rotateY(0deg); }
  .tr-4:hover ~ #card { transform: rotateX(12deg) rotateY(4deg); }
  .tr-5:hover ~ #card { transform: rotateX(12deg) rotateY(8deg); }

  .tr-6:hover ~ #card { transform: rotateX(6deg) rotateY(-8deg); }
  .tr-7:hover ~ #card { transform: rotateX(6deg) rotateY(-4deg); }
  .tr-8:hover ~ #card { transform: rotateX(6deg) rotateY(0deg); }
  .tr-9:hover ~ #card { transform: rotateX(6deg) rotateY(4deg); }
  .tr-10:hover ~ #card { transform: rotateX(6deg) rotateY(8deg); }

  .tr-11:hover ~ #card { transform: rotateX(0deg) rotateY(-8deg); }
  .tr-12:hover ~ #card { transform: rotateX(0deg) rotateY(-4deg); }
  .tr-13:hover ~ #card { transform: rotateX(0deg) rotateY(0deg); }
  .tr-14:hover ~ #card { transform: rotateX(0deg) rotateY(4deg); }
  .tr-15:hover ~ #card { transform: rotateX(0deg) rotateY(8deg); }

  .tr-16:hover ~ #card { transform: rotateX(-6deg) rotateY(-8deg); }
  .tr-17:hover ~ #card { transform: rotateX(-6deg) rotateY(-4deg); }
  .tr-18:hover ~ #card { transform: rotateX(-6deg) rotateY(0deg); }
  .tr-19:hover ~ #card { transform: rotateX(-6deg) rotateY(4deg); }
  .tr-20:hover ~ #card { transform: rotateX(-6deg) rotateY(8deg); }

  .tr-21:hover ~ #card { transform: rotateX(-12deg) rotateY(-8deg); }
  .tr-22:hover ~ #card { transform: rotateX(-12deg) rotateY(-4deg); }
  .tr-23:hover ~ #card { transform: rotateX(-12deg) rotateY(0deg); }
  .tr-24:hover ~ #card { transform: rotateX(-12deg) rotateY(4deg); }
  .tr-25:hover ~ #card { transform: rotateX(-12deg) rotateY(8deg); }

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
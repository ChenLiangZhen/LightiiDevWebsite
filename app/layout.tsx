import './globals.css'
import styles from "@/app/layout.module.css";

export default function RootLayout({
  children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
		<head/>


		<body className={styles.baseLayout}>

				{children}

		</body>

		</html>
	)
}

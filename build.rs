fn main() {
  tauri_build::build();
  #[cfg(target_os = "windows")]
  {
    let mut res = tauri_winres::WindowsResource::new();
    res.set_manifest_file("windows/win7.manifest");
    res.compile().expect("failed to compile windows resources");
  }
}
